import Item from './item.model';

export default app => {
  /* CREATE */
  app.post('/api/lists/:listId/items', (request, response, next) => {
    const item = new Item({
      description: request.body.description,
      list: request.params.listId
    });
    Item.create(item)
      .then(savedItem => response.json(savedItem))
      .catch(error => next(error));
  });

  /* READ */
  app.get('/api/items/:itemId', (request, response, next) => {
    Item.findOne({ _id: request.params.itemId })
      .then(item => response.json(item))
      .catch(error => next(error));
  });

  /* UPDATE */
  app.put('/api/items/:itemId', (request, response, next) => {
    const itemUpdate = {
      description: request.body.description
    };
    Item.findOneAndUpdate(
      { _id: request.params.itemId },
      itemUpdate,
      { new: true, runValidators: true }
    )
      .then(updatedItem => response.json(updatedItem))
      .catch(error => next(error));
  });

  /* DELETE */
  app.delete('/api/items/:itemId', (request, response, next) => {
    Item.findOneAndDelete({ _id: request.params.itemId })
      .then(deletedItem => response.json(deletedItem))
      .catch(error => next(error));
  });
};
