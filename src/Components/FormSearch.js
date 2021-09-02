import React  from 'react';


function FormSearch(props) {

        return (

        <div className="row">
            <form onSubmit={props.submit} className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input 
                            placeholder="Ville" 
                            id="input" 
                            value={props.userInput}
                            placeholder='Rechercher ville'
                            type='text'
                            name='search'
                            onChange={props.search}/>
                    </div>
                    <button 
                        className="waves-effect waves-light btn" type='submit' variant="success"
                        onClick={props.submit}> Rechercher
                    </button>
                </div>
            </form>
        </div>
        )
}

export default FormSearch;