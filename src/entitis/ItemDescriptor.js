export default class ItemDescriptor{
  constructor(id,category,name,description,defaultPrice,photos){
    this.id=id;
    this.category=category;
    this.description= description;
    this.defaultPrice= defaultPrice;
    this.photos=photos;
  }
}