# Field

The <strong>ZField</strong> doubles as an "Error Provider" component. It can consume an <strong>$errors</strong> array from the validation output and surface relevant details.

Either pass in the <strong>$errors</strong> directly, or check if the field is invalid and set your own <code>error</code> message.

<z-field
  v-for="(field, key, index) in form"
  class="mb-2"
  :key="`field-${key}`"
  :label="key"
  :errors="field.$errors"
  :hint="`Type in a ${key}`"
>
  <input v-model="field.$model" />
</z-field>


``` html
<z-field
  v-for="(field, key, index) in form"
  :key="`field-${key}`"
  :label="key"
  :errors="field.$errors"
  :hint="`Type in a ${key}`"
>
  <input v-model="field.$model" />
</z-field>
```

## props

| name      | type    | note        |
| --------- |:------- | :---------- |
| error     | String  |             |
| errors    | Array   | `default: () => []` |
| hint      | String  |             |
| label     | String  |             |
| disabled  | Boolean |             |


<script>
  export default {
    data() {
      return {
        form: {
          username: {
            $model: '',
            $error: true,
            $errors: [{
              $property: "username",
              $validator: "required",
              $message: "Value is required"
            }]
          },
          email:{
            $model: "johndoe@mail.com",
            $error: false,
            $errors: [],
          },
          password:{
            $model: "xxxx",
            $error: true,
            $errors: [{
              $property: "password",
              $validator: "strongpass",
              $message: "This password is not strong"
            }],
          },
        }
      };
    },
  };
</script>