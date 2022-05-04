import data from "public/data.json"

const requestHandler = (req, res) => {
    const { category } = req.query;

    if(req.method === "GET") {
        const products = data.filter(item => item.category.toLowerCase() === category.toLowerCase());
        res.send({
            products
        });
    }
};

export default requestHandler;