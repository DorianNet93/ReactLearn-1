const CARS = [
  {
    id: 1,
    brand: "Audi",
    models: [
      {
        id: 1,
        name: "A1",
        collection: [
          {
            id: 1,
            version: "Sportback",
            year: 2019,
            horsepower: 95,
            engine: 999
          },
          {
            id: 2,
            version: "Citycarver",
            year: 2019,
            horsepower: 95,
            engine: 999
          }
        ]
      },
      {
        id: 2,
        name: "Q5",
        collection: [
          {
            id: 1,
            version: "FY 2021",
            year: 2021,
            horsepower: 299,
            engine: 1984
          },
          {
            id: 2,
            version: "Sportback",
            year: 2021,
            horsepower: 299,
            engine: 1984
          }
        ]
      },
      {
        id: 3,
        name: "TT",
        collection: [
          {
            id: 1,
            version: "Coupe",
            year: 2021,
            horsepower: 197,
            engine: 1984
          },
          {
          id: 2,
          version: "Roadster",
          year: 2021,
          horsepower: 197,
          engine: 1984
          }
        ]
      }
    ]
  },
  {
    id: 2,
    brand: "BMW",
    models: [
      {
        id: 1,
        name: "8 series",
        collection: [
          {
            id: 1,
            version: "G1X LCI",
            year: 2022,
            horsepower: 333,
            engine: 2998
          },
          {
            id: 2,
            version: "G1X",
            year: 2019,
            horsepower: 340,
            engine: 2998
          }
        ]
      },
      {
        id: 2,
        name: "X6",
        collection: [
          {
            id: 1,
            version: "G06 LCI",
            year: 2023,
            horsepower: 530,
            engine: 4395
          },
          {
            id: 2,
            version: "G06",
            year: 2020,
            horsepower: 286,
            engine: 2993
          }
        ]
      }
    ]
  },
];

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

const App = (
  <React.Fragment>
    <h1>Car Specs</h1>
    <table>
      <tbody>
        {CARS.map((elBrand, iBrand) => (
          <React.Fragment key={iBrand}>
            <tr className="row__brand">
              <td colSpan="2">
                <span className="row__brand--text">{ elBrand.brand }</span> 
              </td>
            </tr>
            {elBrand.models.map((elModel, iModel) => (
              <React.Fragment key={iModel}>
                <tr>
                  <td rowSpan={elModel.collection.length + 1} className="cell__model">
                    <span className="cell__model--text">{ elModel.name }</span> 
                  </td>
                </tr>
                {elModel.collection.map((elVersion, iVersion) => (
                  <tr key={iVersion}>
                    <td>
                    <ul>
                        {Object.entries(elVersion).map(([key, val]) => (
                          key !== 'id' && (
                            <li key={key}>
                              {key[0].toUpperCase() + key.slice(1)}: {val}
                            </li>
                          )
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  </React.Fragment>
);

root.render(App)