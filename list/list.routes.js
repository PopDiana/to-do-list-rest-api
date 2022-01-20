import List from './list.model';

export default app => {
  /* CREATE */
  app.post('/api/lists', (request, response, next) => {
    const list = {
      name: request.body.name
    };
    List.create(list)
      .then(savedList => response.json(savedList))
      .catch(error => next(error));
  });

  /* READ */
  app.get('/api/lists/:listId', (request, response, next) => {
    List.findOne({ _id: request.params.listId })
      .populate('items')
      .then(lists => response.json(lists))
      .catch(error => next(error));
  });

  /* UPDATE */
  app.put('/api/lists/:listId', (request, response, next) => {
    const list = {
      name: request.body.name
    };
    List.findOneAndUpdate(
      { _id: request.params.listId }, 
      list, 
      { new: true, populate: 'items', runValidators: true }
    )
      .then(updatedList => response.json(updatedList))
      .catch(error => next(error));
  });

  /* DELETE */
  app.delete('/api/lists/:listId', (request, response, next) => {
    List.findOneAndDelete({ _id: request.params.listId })
      .then(deletedList => response.json(deletedList))
      .catch(error => next(error));
  });
};
