# Button

Buttons are used to initialize an action. Button labels express what action will occur when the user interacts with it. Do not use buttons as navigational elements. Instead, use links when the desired action is to take the user to a new page.

## Primary button

Primary buttons are used for high level actions such as Add, Create, or Save. Only the most important actions on each page should be represented using the primary button.

<z-button primary>Primary</z-button>

``` html
<z-button primary>Primary</z-button>
```

## Secondary button

Secondary buttons are used for main actions within a content module, and actions secondary to any primary action such as Cancel or Close.

<z-button secondary>Secondary</z-button>

``` html
<z-button secondary>Secondary</z-button>
```

## Tertiary button

Tertiary buttons are used for any call-to-action represented on a dark colored background. Tertiary buttons have a white outline with white text.

<div class="bg-grey pa-2">
  <z-button tertiary>Tertiary</z-button>
</div>