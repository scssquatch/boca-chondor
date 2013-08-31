$('.names').html("<%=j render @names %>")
$('.undo').html("<%=j link_to 'Undo', undo_path(@name.id), remote: true %>")
$('#name_name').val("")
