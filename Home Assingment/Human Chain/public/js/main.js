document.addEventListener('DOMContentLoaded', () => {
  const addItemForm = document.getElementById('add-item-form');
  const itemsList = document.getElementById('items-list');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const addError = document.getElementById('add-error');
  const listError = document.getElementById('list-error');
  
  let currentFilter = 'all';
  
  const formatDate = (date) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(date).toLocaleString('en-US', options);
  };
  
  const fetchItems = async () => {
    itemsList.innerHTML = '<div class="loading">Loading Incidents...</div>';
    listError.textContent = '';
    
    try {
      const response = await fetch('/api/items');
      const data = await response.json();
      
      if (data.success) {
        renderItems(data.data);
      } else {
        listError.textContent = 'Failed to load incidents';
        itemsList.innerHTML = '<div class="empty-message">No Incident found</div>';
      }
    } catch (error) {
      listError.textContent = 'Server error';
      itemsList.innerHTML = '<div class="empty-message">No Incidents found</div>';
    }
  };
  
  const renderItems = (items) => {
    if (items.length === 0) {
      itemsList.innerHTML = '<div class="empty-message">No Incidents found</div>';
      return;
    }
    
    const filteredItems = currentFilter === 'all' 
      ? items 
      : items.filter(item => item.category === currentFilter);
    
    if (filteredItems.length === 0) {
      itemsList.innerHTML = `<div class="empty-message">No ${currentFilter} severity incidents found</div>`;
      return;
    }
    
    itemsList.innerHTML = '';
    filteredItems.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.className = 'item-card';
      itemElement.innerHTML = `
        <div class="item-header">
          <h3 class="${item.completed ? 'completed' : ''}">${item.name}</h3>
          <div>
            <button class="toggle-complete" data-id="${item._id}">${item.completed ? 'Uncomplete' : 'Complete'}</button>
            <button class="delete-btn" data-id="${item._id}">Delete</button>
          </div>
        </div>
        <span class="item-category ${item.category}">${item.category}</span>
        <p class="${item.completed ? 'completed' : ''}">${item.description || 'No description'}</p>
        <div class="item-timestamp">Created: ${formatDate(item.createdAt)}</div>
      `;
      
      itemsList.appendChild(itemElement);
    });
    
    document.querySelectorAll('.delete-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        if (confirm('Delete this incident?')) {
          deleteItem(id);
        }
      });
    });

    document.querySelectorAll('.toggle-complete').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        toggleComplete(id);
      });
    });
  };
  
  const addItem = async (e) => {
    e.preventDefault();
    addError.textContent = '';
    
    const itemData = {
      name: document.getElementById('name').value,
      description: document.getElementById('description').value,
      category: document.getElementById('category').value,
      completed: false
    };
    
    try {
      const response = await fetch('/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(itemData)
      });
      
      const data = await response.json();
      
      if (data.success) {
        addItemForm.reset();
        fetchItems();
      } else {
        addError.textContent = data.message || 'Failed to add incident';
      }
    } catch (error) {
      addError.textContent = 'Server error';
    }
  };
  
  const deleteItem = async (id) => {
    try {
      const response = await fetch(`/api/items/${id}`, {
        method: 'DELETE'
      });
      
      const data = await response.json();
      
      if (data.success) {
        fetchItems();
      } else {
        listError.textContent = data.message || 'Failed to delete incident';
      }
    } catch (error) {
      listError.textContent = 'Server error';
    }
  };

  const toggleComplete = async (id) => {
    try {
      const response = await fetch(`/api/items/${id}/toggle`, {
        method: 'PUT'
      });
      
      const data = await response.json();
      
      if (data.success) {
        fetchItems();
      } else {
        listError.textContent = data.message || 'Failed to update incident';
      }
    } catch (error) {
      listError.textContent = 'Server error';
    }
  };
  
  const filterItems = (filter) => {
    currentFilter = filter;
    
    filterButtons.forEach(btn => {
      if (btn.getAttribute('data-filter') === filter) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    
    fetchItems();
  };
  
  addItemForm.addEventListener('submit', addItem);
  
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      filterItems(filter);
    });
  });
  
  fetchItems();
});