new Vue({
    el: '#app',
    data: {
      products: [
        {
          id: 1586934917210,
          unit: '組',
          category: '西式甜點',
          title: '可麗露',
          origin_price: 180,
          price: 120,
          description: '天使的鈴鐺',
          content: '想吃就吃',
          is_enabled: 1,
          imageUrl: 'data:image/jpeg;base64,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',
        },
        {
          id: 1196934917910,
          unit: '塊',
          category: '西式甜點',
          title: '藍莓派',
          origin_price: 80,
          price: 60,
          description: '多層次藍莓派',
          content: '我現在好想吃咧',
          is_enabled: 0,
          imageUrl: 'https://images.unsplash.com/photo-1476887334197-56adbf254e1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        },
      ],
      tempProduct: { },
    },
    methods: {
      updateProduct() {
        if (this.tempProduct.id) {
            console.log(this.tempProduct.id)
            const id = this.tempProduct.id;
            this.products.forEach((item,i) => {
                if(item.id == id){
                    this.products[i] = this.tempProduct;
                }
            });
        } else {
            //將新增產品設定上ID，並新增進products中
          // Unix Timestamp
          const id = new Date().getTime();
          this.tempProduct.id = id;
          this.products.push(this.tempProduct);
        }
        this.tempProduct = {};//清空資料
        $('#productModal').modal('hide');//關閉modal
      },
      openModal(btn_choice, item) {
        switch (btn_choice) {
          case 'add':
            this.tempProduct = {};
            $('#productModal').modal('show');
            break;
          case 'edit':
            this.tempProduct = Object.assign({}, item);//淺層複製產品位置
            $('#productModal').modal('show');
            break;
          case 'delete':
            $('#delProductModal').modal('show');
            this.tempProduct = Object.assign({}, item);
            break;
          default:
            break;
        }
      },
      delProduct() {
        if (this.tempProduct.id) {
          const id = this.tempProduct.id;
          this.products.forEach((item, i) => {
            if (item.id === id) {
              this.products.splice(i, 1);
              this.tempProduct = {};
            }
          });
        }
        $('#delProductModal').modal('hide');
      },
    },
  });