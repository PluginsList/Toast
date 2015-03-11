(function(global){
    var ToastDemo,
        app = global.app = global.app || {};
    
    ToastDemo = kendo.data.ObservableObject.extend({
        
        shorttop:function()
        {
            window.plugins.toast.show('Message should be show on the top','short','top', this.onSuccess, this.onError);
        },
        
        shortcenter:function()
        {
          window.plugins.toast.show("Message should be show on the Center","short","center",this.onSuccess,this.onError); 
        },
        
        shortbottom:function()
        {
          window.plugins.toast.show("Message should be show on the Bottom","short","bottom",this.onSuccess,this.onError);  
        },
        
        longtop:function()
        {
          window.plugins.toast.show("Message should be show on the Top in Long Amount","long","top",this.onSuccess,this.onError);  
        },
        
        longcenter:function()
        {
          window.plugins.toast.show("Message should be show on the Center in Long Amount","long","center",this.onSuccess,this.onError);  
        },
        
        longbottom:function()
        {
          window.plugins.toast.show("Message should be show on the Bottom in Long Amount","long","bottom",this.onSuccess,this.onError);  
        },
        
        onSuccess: function(msg) {
            alert('Toast shown: ' + msg);
        },

        onError: function(msg) {
            alert('Toast error: ' + msg);
        }
    });
    app.toastService = {
        viewModel : new ToastDemo()
    };
})(window);