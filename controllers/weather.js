const request = require('request')

module.exports = {

  index: (req, res) => {
    res.render('search')
  },

  search: (req, res) => {

    console.log(req.params)
    var spotId = req.params.searchTerm
    var surfApiUrl = 'http://api.surfline.com/v1/forecasts'
    //<spot_id>?resources=&days=&getAllSpots=&units=&usenearshore=&interpolate=&showOptimal=&callback=
    var surfRequestUrl = `${surfApiUrl}/${spotId}?surf,wind,tide,weather=&5=&false=&e=&true=&true=&true=&callback=`

    console.log(surfRequestUrl)

    request.get(surfRequestUrl, (err, response, body) => {
      res.json(JSON.parse(body))
    })

  }

}
