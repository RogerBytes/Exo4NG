# Mon analyse de l'exo

> Votre objectif est de créer un composant qui va dynamiquement afficher l’heure actuelle dans différentes villes (Paris, New York, Amsterdam etc.).
>
> Vous devez avoir un composant enfant, et un composant parent.
> Vous ne mettrez AUCUNE logique dans le composant enfant.

\*1 Il (`hour`) affiche l'heure, il sera appelé par `timezone-list` pour afficher l'heure quand on boucle sur les timezones.
C'est bien `timezone-list` le parent.

> L’heure doit se mettre à jour toutes les secondes

\*2 Le rafraîchissement de l'heure tous les 1000ms se fait via la logique de `timezone-list`

> Vous ferez en sorte de découper votre application comme suit :
>
> - Le composant parent sera en charge d’appeler le composant enfant autant de fois que nécessaire.
> - Il aura :
>   . Une liste de timezone, qui comprendra au moins 3 timzeones différentes
>   . Une méthode pour définir l’heure en fonction de la timezone
> - Le composant enfant ne sera chargé QUE d’afficher l’heure

*3 Donc parent = timezone-list et enfant = hour
*4 l'enfant ne sert qu'à faire le template de l'affichage de chaque timezone ?
\*5 quand il dit qu'il appellera l'enfant autant de fois que nécessaire, il veut dire dans la boucle for des timezones

Il faut utiliser

getUTCHours()
getUTCMinutes()
getUTCSeconds()

après avoir créé chaque timezone l'objet via
Date.UTC()

Ce que outman a ajouté :

## Composant parent

Voici le code permettant de récupérer l’heure en fonction de la timezone :

```ts
public setTime(timezone: string): string {
const date = new Date().toLocaleString('fr-FR', { timeZone: timeZone });
 const time = date.split(' ')[1];
 // Il manque la partie qui permet de mettre l'heure à jour toutes les secondes. return time;}
}
```

La timezone de Paris ressemble à ceci : `Europe/Paris`
Toutes les autres timezones sont basées sur le même modèle.

## Composant enfant

Comme expliqué, il ne sera responsable que de l’affichage.

Il devra donc avoir un input qui permet de définir l’heure en appelant la méthode concernée chez le parent.

Pensez donc au property binding
