dynForm = {
    jsonSchema : {
	    title : "Ajouter une url",
	    icon : "link",
	    type : "object",
	    onLoads : {
	    	//pour creer un contact depuis un element existant
	    	"parentUrl" : function(){
	    		if( contextData && contextData.id )
					$("#ajaxFormModal #parentId").val( contextData.id );
    			if( contextData && contextData.type )
    				$("#ajaxFormModal #parentType").val( contextData.type ); 
			}
	    },
	    afterSave : function(){
			dyFObj.closeForm();
		    urlCtrl.loadByHash( location.hash );
	    },
	    properties : {
	    	info : {
                inputType : "custom",
                html:"<p><i class='fa fa-info-circle'></i> Si vous voulez ajouter un nouveau contact de façon a facilité les échanges</p>",
            },
            title : dyFInputs.inputText("Nom", "Titre de l'URL", { required : true }),
	        url : dyFInputs.inputText("URL du lien", "URL du lien", { required : true, url : true }),
            type : dyFInputs.inputSelect("Type de l'URL", "Choisir un type", urlTypes, { required : true }),
            index : dyFInputs.inputHidden(),
            parentId : dyFInputs.inputHidden(null, { required : true }),
            parentType : dyFInputs.inputHidden(null, { required : true })
	    }
	}
};