function Deplacer(l1,l2) {
    if (l1.options.selectedIndex>=0) {
        o=new Option(l1.options[l1.options.selectedIndex].text,l1.options[l1.options.selectedIndex].value);
        l2.options[l2.options.length]=o;
        l1.options[l1.options.selectedIndex]=null;
    }else{
        alert("Aucune activité sélectionnée");
    }
}