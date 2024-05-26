const tips = require("../models/Tips");


const addTip = async(req,res)=>{
    try {
        const payload = req.body;
        const {percentage,totalAmount} = req.body;
        const tip = (percentage * totalAmount)/100;
        payload.tip = tip
        const data = await tips.create(payload);
        res.status(201).send({
            message : "your tip is created",
            data : data
        })
    } catch (error) {
        res.status(400).send({
            error : error.message,
            stack : error.stack
        })
    }
}

const getTIps = async(req,res)=>{
    
    try {
        const { startTime, endTime,userId } = req.body;
     
        const start = new Date(startTime.split('-').reverse().join('-')).toISOString();
        const end = new Date(endTime.split('-').reverse().join('-')).toISOString();

        const tipss = await tips.find({
            time: {
                $gte: start,
                $lte: end
            },
            userId:userId
        });
        
        res.json({
            tips:tipss
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
addTip,
getTIps,

}