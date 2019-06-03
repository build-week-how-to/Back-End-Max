
//EXPORTS ⬇︎
module.exports = {
    howtoToBody,
    stepsToBody
};

//FUNCTIONS ⬇︎
function howtoToBody( howto ) {
    const result = {
        ...project
    };

    if ( project.steps ) {
        result.steps = howto.steps.map( step => ({
            ...step
        }));
    }

    return result;
}

function stepsToBody( step ) {
    return {
        ...step
    }
}