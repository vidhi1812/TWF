const transtlate = require('translate-google')
const getTranslation = async(req,res) =>{
    try{
        const {text} = req.body;
        const translatedText = await transtlate(text, {from: 'en', to:'fr'});
        res.status(200).json({translatedText});
    }
    catch(err){
        console.log(err);
    }
}
module.exports = {getTranslation};