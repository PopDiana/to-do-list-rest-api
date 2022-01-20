export default app => {
    app.use((request, response) => {
      response.status(404);
      response.json({ url: request.originalUrl + ' not found' });
    });
  
    app.use((error, request, response, next) => {
      if (response.headersSent) {
        return next(error);
      }
      response.status(500);
      response.json(error);
    });
  };