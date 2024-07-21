import{aq as h,ar as i,as as o,at as d,au as u}from"./index.8efac6e0.js";import{api as c}from"./axios.8d0996e9.js";import{u as n}from"./auth.1667e469.js";const y=h("cart",{state:()=>({store:{},products:[{sn:"000001",name:"S-300HB",description:"XXXXXX",price:15820,stockQty:2,requireQty:0,remainQty:1,state:1,releaseDate:"",arriveDate:"2024/06/01",method:{sn:"000001",inList:!1}},{sn:"000002",name:"S-300HB",description:"XXXXXX",price:33930,stockQty:1,requireQty:0,remainQty:1,state:0,releaseDate:"",arriveDate:"2024/06/01",method:{sn:"000002",inList:!1}},{sn:"000003",name:"S-300HB",description:"XXXXXX",price:33330,stockQty:1,requireQty:0,remainQty:1,state:1,releaseDate:"",arriveDate:"2024/06/01",method:{sn:"000003",inList:!1}},{sn:"000004",name:"S-300HB",description:"XXXXXX",price:15260,stockQty:1,requireQty:0,remainQty:1,state:0,releaseDate:"",arriveDate:"2024/06/01",method:{sn:"000004",inList:!1}},{sn:"000005",name:"S-300HB",description:"XXXXXX",price:15260,stockQty:1,requireQty:0,remainQty:1,state:0,releaseDate:"",arriveDate:"2024/06/01",method:{sn:"000005",inList:!1}}],lists:[],total:{qty:0,price:0},productFilter:{warehouses:null,search:null},productOptions:{state:{0:"wait",1:"Cancel",2:"Confirmed",3:"Reserved"},warehouseType:{list:{reserve:"Reserved",inquiry:"Inquiries",sale:"Sale"},options:{stock:{reserve:"Reserved",sale:"Sale"},inquiry:{inquiry:"Inquiries"}},defaultValue:{currentSet:"",defaultSet:"reserve",stock:"reserve",inquiry:"inquiry"}},location:{0:"Europe",1:"Taiwan",2:"Other"},productState:{available:"Available",reserved:"Reserved",inquiry:"Inquiry"}},colorSchema:{type:{reserve:"red",inquiry:"orange",sale:"blue"}},orderHistory:[],orderDetail:[]}),getters:{countList(){return this.lists.length},locationOption:t=>{let e=[];for(let r in t.productOptions.location)e.push({label:t.productOptions.location[r],value:r});return e},typeOption:t=>{let e=[];if(t.lists.length>0){let s=t.store.stock.find(l=>l.id===t.lists[0].warehouse_id);s?(e=t.productOptions.warehouseType.options[s.type],t.productOptions.warehouseType.defaultValue.currentSet=t.productOptions.warehouseType.defaultValue[s.type]):(e=t.productOptions.warehouseType.list,t.productOptions.warehouseType.defaultValue.currentSet=t.productOptions.warehouseType.defaultValue.defaultSet)}else e=t.productOptions.warehouseType.list,t.productOptions.warehouseType.defaultValue.currentSet=t.productOptions.warehouseType.defaultValue.defaultSet;let r=[];for(let s in e)r.push({label:e[s],value:s});return r},defaultOrderType:t=>t.productOptions.warehouseType.defaultValue.currentSet},actions:{init(){this.initStore()},async getProductList(){let t="/api/v1/products";this.productFilter.warehouses&&!this.productFilter.search&&(t+=`?warehouses=${this.productFilter.warehouses.value}`),!this.productFilter.warehouses&&this.productFilter.search&&(t+=`?search=${this.productFilter.search}`),this.productFilter.warehouses&&this.productFilter.search&&(t+=`?warehouses=${this.productFilter.search}&search=${this.productFilter.search}`),await this.connectStore("product",t).then(()=>{var e,r,s,l;if(this.store.product.length>0){this.products=[];for(let a of this.store.product)this.products.push({sn:(e=a.sn)!=null?e:a.product_id,sn_id:(r=a.sn_id)!=null?r:a.product_id,name:a.product_name,description:a.product_description,price:a.price,stockQty:a.product_qty,state:(s=a.state)!=null?s:"inquiry",releaseDate:a.release_date,arriveDate:a.scheduled_date,type:a.type,stock:{id:a.warehouse_id,name:a.warehouse_name},method:{sn_id:(l=a.sn_id)!=null?l:a.product_id,inList:!1}})}return this.initCartLists()}).then(e=>{this.initProductList()})},async initStore(){await this.connectStore("stock","/api/v1/warehouses").then(()=>{if(this.store.stock.length>0){this.productOptions.location={};for(let t of this.store.stock)this.productOptions.location[t.id]=t.name}}),await this.getProductList(),await this.initOrderHistory()},async connectStore(t,e){try{i.show(),await c.get(e).then(r=>{i.hide(),r.status===200&&r.data.error?o.create({title:"error",message:"error"}):this.store[t]=r.data.data})}catch(r){if(i.hide(),o.create({title:r.name,message:r.message}),r)throw r}},async initCartLists(){await this.connectStore("cart",`/api/v1/get_cart?user_id=${n().getUid}`).then(t=>{if(this.store.cart.length>0){this.lists=[];for(let e of this.store.cart)this.lists.push({sn_id:e.lot_id,sn:e.lot_name,pid:e.product_id,name:e.product_name,description:e.product_description,price:e.price_unit,amount:e.product_qty})}})},async initOrderHistory(){await this.connectStore("orderHistory",`/api/v1/get_order?user_id=${n().getUid}`).then(()=>{var t;if(this.store.orderHistory.length>0){this.orderHistory=[];for(let e of this.store.orderHistory)this.orderHistory.push({id:e.order_id,no:e.name,state:(t=e.state)!=null?t:0,status:e.status,location:e.warehouse_id,contact:`${e.contact_name}/${e.contact_phone}`,method:e.order_id,date:{order:e.create_date},contactDetail:{name:e.contact_name,tel:e.contact_phone,message:e.remark},order:null})}})},initStorage(t,e){return this.checkStorage(t,e),JSON.parse(d.getItem(t))},checkStorage(t,e){d.getItem(t)===null&&d.set(t,JSON.stringify(e))},checkWarehouse(t){this.lists=this.lists.filter(s=>s.sn_id!==t);let e=this.products.find(s=>s.sn_id===t),r=this.lists.filter(s=>s.warehouse_id!==e.stock.id);this.lists.length>0&&r.length>0?o.create({title:"Warehouse Conflict",message:"The warehouse from cart products conflict to the current product, would you like to clear cart with the current product?",cancel:!0,persistent:!0}).onOk(()=>{this.clearLists(),this.updateList(t)}):this.updateList(t)},updateList(t){this.lists=this.lists.filter(r=>r.sn_id!==t);let e=this.products.find(r=>r.sn_id===t);this.lists.push({sn_id:t,sn:e.sn,pid:e.product_id,amount:1,name:e.name,description:e.description,price:e.price,warehouse_id:e.stock.id}),this.products.map(r=>{r.sn_id===t&&(r.method.inList=!0)}),this.addCartFromStore(t),this.updateTotal()},removeItem(t){this.lists=this.lists.filter(e=>e.sn_id!==t),this.products.map(e=>{e.sn_id===t&&(e.method.inList=!1)}),this.removeCartFromStore(t),this.updateTotal()},async addCartFromStore(t){try{i.show();const e=this.products.find(s=>s.sn_id===t),r={user_id:n().getUid};e.type==="S/N"?r.sn_id=t:r.product_id=t,await c.post("/api/v1/add_cart",r).then(s=>{i.hide(),s.status===200&&s.data.error?(console.log(s.data),o.create({title:s.data.error.data.name,message:s.data.error.data.message})):u.create({message:"Item Added",color:"blue"})})}catch(e){if(i.hide(),o.create({title:e.name,message:e.message}),e)throw e}},async removeCartFromStore(t){try{i.show(),await c.post("/api/v1/remove_cart",{sn_id:t,user_id:n().getUid}).then(e=>{i.hide(),e.status===200&&e.data.error?o.create({title:"error",message:e.data.error.message}):u.create({message:"Item removed",color:"green"})})}catch(e){if(i.hide(),o.create({title:e.name,message:e.message}),e)throw e}},async clearCartFromStore(){try{i.show(),await c.post("/api/v1/clear_cart",{user_id:n().getUid}).then(t=>{i.hide(),t.status===200&&t.data.error?o.create({title:"error",message:t.data.error.message}):u.create({message:"Cart Clear",color:"green"})})}catch(t){if(i.hide(),o.create({title:t.name,message:t.message}),t)throw t}},increaseAmount(t){this.lists.map(e=>{e.sn===t.sn&&e.amount++}),this.updateTotal()},decreaseAmount(t){this.lists.map(r=>{r.sn===t.sn&&r.amount--});let e=this.lists.find(r=>r.amount===0);e&&this.removeItem(e.name),this.updateTotal()},updateTotal(){let t={qty:0,price:0};for(let e of this.lists)t.qty+=e.amount,t.price+=e.amount*e.price;this.total=t,d.set("products",JSON.stringify(this.products))},initProductList(){this.checkStorage("products",this.products);let t=[];this.products.map(e=>{let r=this.lists.find(s=>s.sn===e.sn);r&&(e.method.inList=!0,t.push(r))}),this.lists=t,this.updateTotal()},availableAmount(t){let e=this.products.find(r=>r.sn===t);return e?e.stockQty:0},arriveDate(t){let e=this.products.find(r=>r.sn===t);return e?this.formateDate(e.arriveDate):"--"},formateDate(t){return t===void 0||t===!1?"--":t},clearLists(){this.lists=[],this.products.map(t=>t.method.inList=!1),this.clearCartFromStore(),this.updateTotal()},async updateOrderStorage(t){try{i.show();const e={user_id:n().getUid,status:t.type,contract_name:t.contactDetail.name,contract_phone:t.contactDetail.tel,remark:t.contactDetail.message};await c.post("/api/v1/post_order",e).then(r=>{i.hide(),console.log(r),r.status===200&&r.data.result.data==="error"?o.create({title:"error",message:r.data.result.message}):u.create({message:"Order Create Successfully",color:"blue"})})}catch(e){if(i.hide(),o.create({title:e.name,message:e.message}),e)throw e}},saveOrder(t){return this.orderHistory.push(t),this.updateOrderStorage(t),this.clearLists(),!0},async confirmOrder(t){this.orderHistory.map(e=>{e.no===t&&(e.state=2)});try{i.show();const e={user_id:n().getUid,order_id:t};await c.post("/api/v1/confirm_order",e).then(r=>{i.hide(),console.log(r),r.status===200&&r.data.result.data==="error"?o.create({title:"error",message:r.data.result.message}):u.create({message:"Order Confirmed",color:"blue"})})}catch(e){if(i.hide(),o.create({title:e.name,message:e.message}),e)throw e}},async cancelOrder(t){this.orderHistory.map(e=>{e.no===t&&(e.state=1)});try{i.show();const e={user_id:n().getUid,order_id:t};await c.post("/api/v1/cancel_order",e).then(r=>{i.hide(),console.log(r),r.status===200&&r.data.result.data==="error"?o.create({title:"error",message:r.data.result.message}):u.create({message:"Order Canceled",color:"blue"})})}catch(e){if(i.hide(),o.create({title:e.name,message:e.message}),e)throw e}},updateOrder(t,e){this.orderHistory.map(r=>{r.no===t&&(r=e)}),this.updateOrderStorage()},removeStorage(){d.remove("cart"),d.remove("products"),d.remove("order-history")}}});export{y as u};
