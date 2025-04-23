To revise what ive learnt in this lesson https://www.theodinproject.com/lessons/nodejs-forms-and-data-handling.

- Forms use PRG design pattern (Post, Redirect, Get).
- Post form inputs, redirect user to page, get form inputs
- Validation -> ensure inputs meet specs
- Sanitization -> cleans user input ie: encodes malicious input stuff..

- we use express-validator, this library has 2 useful methods, namely body() and validationResult()

1. Import express-validator
2. Setup up array of validation rules using body method and chaing rules
3. Within the post controller, add validation rule like so: const contollerPost = [validationRules, (req,res)=>{//some code}]

4. Within the controller, do:
   .
   .
   .
   const errors = validationResult(req);
   if(!errors.isEmpty()){
   return res.status(400).render('index', {errors:errors.array()})
   }
   // else, do something useful with the validated input
