// @desc to get all transactions
// @route Get /api/transactions
// @access PUBLIC

exports.getTransactions = ((req, res)=>
res.send('Get TRANSactions'))


// @desc to ADD transactions
// @route POST /api/transactions
// @access PUBLIC

exports.addTransactions = ((req, res)=>
    res.send('add TRANSaction'))


// @desc to delete transactions
// @route DELETE /api/transactions
// @access PUBLIC

exports.deleteTransactions = ((req, res)=>
    res.send(`remove TRANSaction ${req.params.id}`))