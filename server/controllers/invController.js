const Inventory =require('../models/inventory');

const test=(req,res) =>{
    res.json('test is working')
}
const addNew=async(req,res) =>{
    const{name,description,quantity,category,reorder,itemcode}=req.body;

    const inventory=await Inventory.create({
        name,
        description,
        quantity,
        category,
        reorder,
        itemcode
    })

    return res.json(inventory)
}
const updateItem=async(req,res) =>{
    const { itemId } = req.params;
    console.log(itemId);
    console.log(req.body)
    const{name,description,quantity,category,reorder,itemcode}=req.body;

    const inventory = await Inventory.findByIdAndUpdate(
        itemId,
        {
            name,
            description,
            quantity,
            category,
            reorder
        },{
            new: true
        }
      );
    


    return res.json(inventory)
}
const deleteItem=async(req,res) =>{
    const { itemId } = req.params;
    try {
        const inventory = await Inventory.findByIdAndRemove(itemId);
        if (!inventory) {
          return res.json({
              error:'No Item found'
          })
        }
    
        res.json({ message: 'Item deleted' });
      } catch (error) {
        console.log(error);
     
      }
}
const getAllItems = async (req, res) => {
    try {
      const items = await Inventory.find();
      res.json(items);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching inventory items' });
    }
  };
  const getItem = async (req, res) => {
    try {
        console.log(req.params.itemId)
      const items = await Inventory.findById(req.params.itemId);
      res.json(items);
      console.log(req.itemId);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching inventory items' });
    }
  };
module.exports ={
    addNew,
    getAllItems,
    getItem,
    updateItem,
    deleteItem
}