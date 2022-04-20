const router = require('express').Router();

router.route('/').get((req,res)=>{
    msg = `Hello ${req.query.name|| "World"} from get request`;
    res.json({msg})
})

router.route('/:lang').get((req,res)=>{
    switch(req.params.lang){
        case "es":
            msg = "Hola mundo!!";
            break;
        case "en":
            msg = "Hello word";
            break;
        case "fr":
            msg = "Bonjour Monde!!";
            break;
        default:
            msg = "Hello Word!!"
    }

    res.json({msg})

})

router.route('/').post((req,res)=>{
    msg = `Hello ${req.body.name|| "World"} from post request`; 
    res.json({msg})
})

module.exports = router