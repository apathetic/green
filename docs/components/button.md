# Button

Buttons are used to initialize an action. Button labels express what action will occur when the user interacts with it. Do not use buttons as navigational elements. Instead, use links when the desired action is to take the user to a new page. Primary buttons always appear to the right, and secondary buttons appear to the left of the primary button in instances where used together. All buttons have a recommended character count of eighteen characters or less.

## Primary button

Primary buttons are used for high level actions such as Add, Create, or Save. Only the most important actions on each page should be represented using the primary button. Primary buttons can be colored depending on their use (blue or red). Red primary buttons should only be used for actions that have irreversible changes.

<g-button primary>Primary</g-button>

``` html
<g-button primary>Primary</g-button>
```

## Secondary button

Secondary buttons are used for main actions within a content module, and actions secondary to any primary action such as Cancel or Close. Secondary buttons can be colored depending on their use (blue or red). Red secondary buttons should only be used for actions that have irreversible changes.

<g-button secondary>Secondary</g-button>

``` html
<g-button secondary>Secondary</g-button>
```

## Tertiary button

Tertiary buttons are used for any cag-to-action represented on a dark colored background. Tertiary buttons have a white outline with white text.

<div class="bg-grey pa-2">
  <g-button tertiary>Tertiary</g-button>
</div>