var a = [
    {id: "Sample_Post"}, {id: "Example"}, {id: "Id_Ajith"},
    {id: "arun_cool"}, {id: "cool_boy"}, 
    {id: "charming"}, {id: "kd_billa"}, {id: "suriya_expired"}, 
    {id: "charan_fine"}, {id: "call_me_praba"}, {id: "vinu"}
];

var b = document.getElementById("sea");
var c = document.getElementById("list");

function updateList() {
    var lower = b.value.toLowerCase();
    
    if (lower === '') {
        c.innerHTML = '';
        c.style.display = 'none';
    } else {
        var filt = a.filter(item => item.id.toLowerCase().includes(lower));
        c.innerHTML = filt.map(abc => `${abc.id} <span class="sp1 m-5" style="color:blue;cursor:pointer;">Follow</span>`).join('<br>');
        c.style.display = 'block';

        
        var followSpans = document.querySelectorAll('.sp1');
        followSpans.forEach(span => {
            span.addEventListener('click', function() {
                if (this.textContent === 'Follow') {
                    this.textContent = 'Following';
                } else {
                    this.textContent = 'Follow';
                }
            });
        });
    }
}

c.style.display = 'none';
b.addEventListener('input', updateList);
