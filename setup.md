## How to setup Tailwind CSS
 Run the following commands

```Step 1:npm install -D tailwindcss
    npx tailwindcss init``` 

```Step 2:Update tailwind.conf.js file to
    include this line:
    content:["*.html"],
    ``` 
```Step 1:create src/input.css to include:
    ```
    @tailwindcss base;
    @tailwindcss components;
    @tailwindcss utilities;
    ```
```Step 4:Include teh sorc/Output.css file to your html```

```Step 5: Run the following:```
npx @tailwindcss/cli -i ./sorc/input.css -o ./sorc/output.css --watch```

