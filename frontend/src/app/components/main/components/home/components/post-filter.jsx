import React from 'react'
import MyInput from '../../../../../UI-components/input/my-input'
import MySelect from './my-select'

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div className="sort__container">
      <MyInput
        className="sort__input"
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Поиск..."
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
        defaultValue={'Сортировка по...'}
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'date', name: 'По дате' },
        ]}
      />
    </div>
  )
}

export default PostFilter
