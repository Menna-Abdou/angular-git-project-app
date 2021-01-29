import { ProductCategory } from '../_model/product-category'

export class ProductCategoryService{
    productCategory : ProductCategory[] = [
         {id:'5eac38b30cfca15d7c804090' , name:'Arts & Crafts' },
        //  {id:2 , name:'Automotive' },
        //  {id:3 , name:'Baby' },
        //  {id:4 , name:'Books' },
        //  {id:5 , name:'Eletronics' },
        //  {id:6 , name:'Womens Fashion' },
        //  {id:7 , name:'Mens Fashion' },
        //  {id:8 , name:'Health & Household' },
        //  {id:9 , name:'Military Accessories' },
        //  {id:10 , name:'Movies & Television' },
        //  {id:11 , name:'Sports & Outdoors' },
        //  {id:12 , name:'Tools & Home Improvement' },
        //  {id:13 , name:'Toys & Games' },
    ];
    getAllProductCategory(): ProductCategory[]{
        return this.productCategory
    }
}