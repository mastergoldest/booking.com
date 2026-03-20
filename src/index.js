 function toggleDropdown() {
      const dropdown = document.getElementById('dropdown');
      const field = document.getElementById('destField');
      const isOpen = dropdown.classList.contains('open');
      dropdown.classList.toggle('open', !isOpen);
      field.classList.toggle('focused', !isOpen);
    }

    function selectDestination(name, event) {
      event.stopPropagation(); // prevent toggleDropdown from firing
      const text = document.getElementById('destText');
      text.textContent = name;
      text.classList.add('active');
      document.getElementById('dropdown').classList.remove('open');
      document.getElementById('destField').classList.remove('focused');
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      const field = document.getElementById('destField');
      if (!field.contains(e.target)) {
        document.getElementById('dropdown').classList.remove('open');
        field.classList.remove('focused');
      }
    });