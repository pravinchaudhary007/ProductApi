import Products from '../Models/ProductModels.js';

const Product = async (req, res) => {
  const { company, qty, sort,select } = req.query;

  const productquery = {};

  if (company) {
    productquery.company = { $regex: company, $options: 'i' }; 
  }

  if (qty) {
    productquery.qty = qty;
  }

  try {
    let apidata = Products.find(productquery);

    const pages = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (pages - 1) * limit ;
    
    apidata = apidata.skip(skip).limit(limit);

    if (sort) {
      const sortdata = sort.replace(',',' '); 
      apidata = apidata.sort(sortdata);
    }
    if (select) {
      const sortdata = select.split(',').join(' '); 
      apidata = apidata.select(sortdata);
    }

    const fainalProducts = await apidata;


    res.status(200).json({ Products: fainalProducts , Page: pages, nbHits : fainalProducts.length });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export default Product;
