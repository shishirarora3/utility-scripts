const snippets = {
    render(htmlStr){
        //document.body.appendChild(document.createRange().createContextualFragment(htmlStr));
        console.log(htmlStr);
    }
};

//console.clear();
const simple_chart_config = {
    chart: {
        container: "#tree-simple"
    }
};

const getNode = name => ({
    text: {
        name
    },
    children: []
});
const rootNode = (simple_chart_config.nodeStructure = getNode(`[]`));

module.exports = {
    snippets,
    simple_chart_config,
    getNode,
    rootNode
};