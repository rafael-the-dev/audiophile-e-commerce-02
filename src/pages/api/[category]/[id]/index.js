import data from "public/data.json"

const requestHandler = (req, res) => {
    const { id } = req.query;

    if(req.method === "GET") {
        const product = data.find(item => item.slug === id);
        res.send({
            product
        });
    }
};

export default requestHandler;