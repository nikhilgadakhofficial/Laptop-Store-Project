

const authorzeRoles = (...alloweRoles)=>{
 
    return (req,res,next)=>{
        if (!alloweRoles.includes(req.user.role)) {
            return res.status(403).json({
                message : "Access not denide"
            })
        }
        next()
    }
}

module.exports = authorzeRoles;