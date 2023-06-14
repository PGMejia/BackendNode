exports.getLibros = function(req, res, next) {
    res.status(200).json({success: true, msg: 'Se procesó correctamente'});

}

exports.getLibro = function(req, res, next) {
    res.status(200).json({success: true, msg: 'Se devuelve un libro'});

}

exports.postLibro = function(req, res, next) {
    res.status(200).json({success: true, msg: 'Se creó correctamente'});
}

exports.putLibro = function(req, res, next) {
    res.status(200).json({success: true, msg: 'Se actualizó correctamente'});
 
}

exports.deleteLibro = function(req, res, next) {
    res.status(200).json({success: true, msg: 'Se borró correctamente'});
 
}