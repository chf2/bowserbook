# Phase 4: User Interaction -- Pokes and Messages

## Rails
### Models
* Poke
* Message

### Controllers
* Api::PokesController (create, update, destroy)
* Api::MessagesController (create, show, destroy, index)

### Views
* messages/index.json.jbuilder
* messages/show.json.jbuilder

## Backbone
### Models
* Poke
* Message

### Collections
* Pokes
* Messages

### Views
* PokesIndex (composite view, PokeIndexItem subview)
* PokesIndexItem
* MessagesIndex (composite view, MessagesIndexItem subview)
* MessagesIndexItem
* MessageShow
* MessageNew

## Gems/Libraries
