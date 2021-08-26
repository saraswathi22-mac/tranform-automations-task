const GetName = ({data}) => {
    data = data.name.split(' ')
    return (
      data.map((datum) => (
        data = datum[0].toUpperCase() + datum.slice(1,) + " "
      ))
    )
  }

export default GetName;