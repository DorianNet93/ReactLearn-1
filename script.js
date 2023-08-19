var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var CARS = [{
  id: 1,
  brand: "Audi",
  models: [{
    id: 1,
    name: "A1",
    collection: [{
      id: 1,
      version: "Sportback",
      year: 2019,
      horsepower: 95,
      engine: 999
    }, {
      id: 2,
      version: "Citycarver",
      year: 2019,
      horsepower: 95,
      engine: 999
    }]
  }, {
    id: 2,
    name: "Q5",
    collection: [{
      id: 1,
      version: "FY 2021",
      year: 2021,
      horsepower: 299,
      engine: 1984
    }, {
      id: 2,
      version: "Sportback",
      year: 2021,
      horsepower: 299,
      engine: 1984
    }]
  }, {
    id: 3,
    name: "TT",
    collection: [{
      id: 1,
      version: "Coupe",
      year: 2021,
      horsepower: 197,
      engine: 1984
    }, {
      id: 2,
      version: "Roadster",
      year: 2021,
      horsepower: 197,
      engine: 1984
    }]
  }]
}, {
  id: 2,
  brand: "BMW",
  models: [{
    id: 1,
    name: "8 series",
    collection: [{
      id: 1,
      version: "G1X LCI",
      year: 2022,
      horsepower: 333,
      engine: 2998
    }, {
      id: 2,
      version: "G1X",
      year: 2019,
      horsepower: 340,
      engine: 2998
    }]
  }, {
    id: 2,
    name: "X6",
    collection: [{
      id: 1,
      version: "G06 LCI",
      year: 2023,
      horsepower: 530,
      engine: 4395
    }, {
      id: 2,
      version: "G06",
      year: 2020,
      horsepower: 286,
      engine: 2993
    }]
  }]
}];

var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);

var App = React.createElement(
  React.Fragment,
  null,
  React.createElement(
    "h1",
    null,
    "Car Specs"
  ),
  React.createElement(
    "table",
    null,
    React.createElement(
      "tbody",
      null,
      CARS.map(function (elBrand, iBrand) {
        return React.createElement(
          React.Fragment,
          { key: iBrand },
          React.createElement(
            "tr",
            { className: "row__brand" },
            React.createElement(
              "td",
              { colSpan: "2" },
              React.createElement(
                "span",
                { className: "row__brand--text" },
                elBrand.brand
              )
            )
          ),
          elBrand.models.map(function (elModel, iModel) {
            return React.createElement(
              React.Fragment,
              { key: iModel },
              React.createElement(
                "tr",
                null,
                React.createElement(
                  "td",
                  { rowSpan: elModel.collection.length + 1, className: "cell__model" },
                  React.createElement(
                    "span",
                    { className: "cell__model--text" },
                    elModel.name
                  )
                )
              ),
              elModel.collection.map(function (elVersion, iVersion) {
                return React.createElement(
                  "tr",
                  { key: iVersion },
                  React.createElement(
                    "td",
                    null,
                    React.createElement(
                      "ul",
                      null,
                      Object.entries(elVersion).map(function (_ref) {
                        var _ref2 = _slicedToArray(_ref, 2),
                            key = _ref2[0],
                            val = _ref2[1];

                        return key !== 'id' && React.createElement(
                          "li",
                          { key: key },
                          key[0].toUpperCase() + key.slice(1),
                          ": ",
                          val
                        );
                      })
                    )
                  )
                );
              })
            );
          })
        );
      })
    )
  )
);

root.render(App);