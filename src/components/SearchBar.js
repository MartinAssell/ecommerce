import React from 'react';
import '../assets/css//SearchBar.css'; // Importamos los estilos CSS

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías enviar la búsqueda o realizar alguna acción con this.state.searchTerm
    console.log("Búsqueda realizada:", this.state.searchTerm);
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Buscar..."
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        <button type="submit">Buscar</button>
      </form>
    );
  }
}

export default SearchBar;
