const Lutter = require("../models/lutteurs");

exports.getLutters = async (req, res) => {
    const result = await Lutter.find();
    res.send(result)
    // res.render('lutters/index', { title: "Hey olakouns", lutters: result })
}

exports.createLutterGet = (req, res) => {
    // res.send("createLutterGet");
    // res.redirect("/lutters");
    res.render('lutters/create', { title: "Create lutters", lutter: null })
}

exports.createLutterPost = (req, res) => {
    let lutter = new Lutter(req.body);
    lutter.save(err => {
        console.log(err);
        if (err != null) {
            return res.send(err);
        } else {
            res.redirect("/lutters");
        }
    })
    // res.send("createLutterPost");
}

exports.getDetailLutter = (req, res) => {
    Lutter.findById(
        req.params.id,
        (err, value)=> {
            if (err) return res.send(err);
            res.send(value)
            // res.render('lutters/details', { lutterDetails: value })
        }
    )
}


exports.updateLutterGet = (req, res) => {
    // res.send("updateLutterGet");
    Lutter.findById(
        req.params.id,
        (err, value)=> {
            if (err) return res.send(err);
            res.render('lutters/create', { title: "Update Lutter", lutter: value })
        }
    )
}

exports.updateLutterPost = (req, res) => {
    // res.send("updateLutterPost");
    Lutter.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true},
        (err, updatedLutter) => {
            if (err) return res.send(err);
            res.send(updatedLutter)
            // res.redirect("/lutters");
        }
    )
}

exports.deleteLutterGet = (req, res) => {
    // Lutter.findByIdAndRemove(
    //     req.params.id,
    //     (err, deletedLutter) =>{
    //         if (err) return res.send(err);
    //         res.send({
    //             success : true,
    //             message : "Lutter is deleted"
    //         })
    //     }
    // )
    res.send("deleteLutterGet");
}

exports.deleteLutterPost = (req, res) => {
    Lutter.findByIdAndRemove(
        req.params.id,
        (err, deletedLutter) =>{
            if (err) return res.send(err);
            res.send({
                success : true,
                message : "Lutter is deleted"
            })
        }
    )
    // res.send("deleteLutterPost");
}