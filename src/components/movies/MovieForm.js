import React, {PropTypes} from 'react';
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const MovieForm = ({movie, allAuthors, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Movie</h1>
      <TextInput
        name="title"
        label="Title"
        onChange={onChange}
        value={movie.title}
        error={errors.title} />

      <SelectInput
        name="authorId"
        label="Autor"
        value={movie.authorId}
        defaultOption="Choose author"
        options={allAuthors}
        onChange={onChange}
        error={errors.authorId} />

      <TextInput
        name="category"
        label="Category"
        onChange={onChange}
        value={movie.category}
        error={errors.category} />

      <TextInput
        name="length"
        label="Length"
        onChange={onChange}
        value={movie.length}
        error={errors.length}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' :  'Save'}
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
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default MovieForm;
