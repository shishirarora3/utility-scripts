const {
    snippets,
    simple_chart_config,
    getNode,
    rootNode
} = require("./index-no-dom");

const resultMap = {};
const array = "nitin".split("");
/**
 indices: indeces of the values say ["n", "i"], in acutal arr ["n", "i", "t", "i", "n"], here [3, 1, 2]
 retut is intermediate results aray like ["nn", "nit"]
 returns boolean is collected or not
 **/
const collectResult = (indices, level) => {
    resultMap[level] = resultMap[level] || [];
    const values = indices.map(i=>array[i]);
    const length = values.length;
    for (let i = 0; i < length; i++) {
        if (
            (i + 1 < length && indices[i] + 1 !== indices[i + 1]) ||
            values[i] !== values[length - i - 1]
        ) {
            return false;
        }
    }
    resultMap[level].push(values.join(""));
    return true;
};

const fn = (arr, rootNode, getNode, collectResult) => {
    const getNodeValue = indecis => indecis.map(i => arr[i]).join("");
    const rec = (_result = [], el, subTree = rootNode, level = 0) => {
        const values = getNodeValue(_result);
        const node = getNode(values);

        collectResult(_result, level);
        subTree.children.push(node);
        if (_result.length === arr.length) {
            //leaf
        } else {
            arr.forEach((el, i) => {
                if (_result.includes(i)) {
                    return;
                }
                rec([..._result, i], el, node, level + 1);
            });
        }
    };
    rec();
};

fn(array, rootNode, getNode, collectResult);

snippets.render(
    `${Object.keys(resultMap).reduce(
        (r, key, i) => (r += `<p class="tab" data-level="${key}">${resultMap[key].join(" ")}`),
        ``
    )}`
);
//const my_chart = new Treant(simple_chart_config);
