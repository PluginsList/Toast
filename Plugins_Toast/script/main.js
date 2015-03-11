(function(global){
    var ToastDemo,
        app = global.app = global.app || {};
    
    ToastDemo = kendo.data.ObservableObject.extend({
        
        shorttop:function()
        {
          alert("Short Top");  
            window.plugins.toast.showShortTop('Your changes have been saved', this.onSuccess, this.onError);
        },
        
        shortcenter:function()
        {
          alert("shortcenter");  
        },
        
        shortbottom:function()
        {
          alert("shortbottom");  
        },
        
        longtop:function()
        {
          alert("longtop ");  
        },
        
        longcenter:function()
        {
          alert("longcenter Top");  
        },
        
        longbottom:function()
        {
          alert("longbottom Top");  
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