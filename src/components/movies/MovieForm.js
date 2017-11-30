import React, {PropTypes} from 'react';
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const MovieForm = ({movie, allAuthors, onSave, onChange, loading, errors}) => {
  return (
    <form>
      <TextInput
        name="title"
        label="Tytuł"
        onChange={onChange}
        value={movie.title}
        error={errors.title} />

      <SelectInput
        name="authorId"
        label="Autor"
        value={movie.authorId}
        defaultOption="Wybierz autora"
        options={allAuthors}
        onChange={onChange}
        error={errors.authorId} />

      <TextInput
        name="category"
        label="Kategoria"
        onChange={onChange}
        value={movie.category}
        error={errors.category} />

      <TextInput
        name="length"
        label="Czas trwania"
        onChange={onChange}
        value={movie.length}
        error={errors.length}/>

      <input
        type="submit"
        disabled={loading}
        value={loading ? 'Zapisuje...' :  'Zapisano'}
        className="btn btn-primary"
        onClick={onSave} />
    </form>
  );
};

MovieForm.propTypes = {
  movie: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  allAuthors: PropTypes.array,
  loading: PropTypes.bool,
  errors: PropTypes.object
};

export default MovieForm;
