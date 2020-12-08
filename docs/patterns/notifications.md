# Notifications

There are many ways that we communicate feedback to the user, each of which is commensurate to the type of information to provide. In general we have three types, starting from the _least specific_  to the _most specific_:

* System-level
* Page-level
* Contextual


## Severity

In tandem with the [type](#types) of notification, colors are used to indicate the _severity_ of the notification. There are four levels, or hierarchies:

* **<span class="color-info">Info</span>** Used to present general information or feedback. Doesn't necessitate any further user action.
* **<span class="color-warning">Warning</span>** Something that the user should be aware of, it's not a problem at the moment.
* **<span class="color-success">Success</span>** An action was successful, usually a user-initiated action that we're providing feedback on
* **<span class="color-error">Error</span>** Something went wrong; an action was unsuccessful. Generally, this necessitates further action on the part of the user.


## Types

### System-level

System level feedback is the most general type of information that we provide to the user. It is not specific to a particular page or field, but rather applies to the application as a whole. It is surfaced at the top of the page, for example as a page banner. <!-- alert component ? --> It might be used to notify the user about license information, related activites or events, or general notifications.

### Page-level

Page level feedback is used to surface information pertaining to the current page as a whole. This information is usually surfaced in the form of a "toast notification", but might be a persistent inline notification, too. Commonly, this level of notification contains feedback about a page's form submission or information about an updates to a field on the page.

<figure style="width: 66%; float: left">
  <img src="/assets/images/patterns/notifications/page.png" />
  <figcaption>Page-level (inline) notifications</figcaption>
</figure>

<figure style="width: 33%; float: left">
  <img src="/assets/images/patterns/notifications/toastr.png" />
  <figcaption>Toastr notifications</figcaption>
</figure>

### Contextual

<figure style="width: 33%; float: right">
  <img src="/assets/images/patterns/notifications/error.png" />
  <figcaption>An error on a field</figcaption>
</figure>

Contextual feedback is the most specific type. Usually, it is tied to a particular field / form element, or value on a page. For example, error messaging below a field,



#### Attention-getting animations

There are specific short, distinct animations that are used to provide feedback to a user. These indicate that something on the page has changed as a direct result of their action. Attention-getting animations are generally reserved for when an update happens outside a user’s field of focus. For example: an item was added to the cart, or a subtotal updates, or there was an error on a field.

These interactions are broken down into two types:

* **Shake**: something changed, requires further user interaction
* **Pulse**: something changed, but does not require additional interaction


## Examples

do

dont