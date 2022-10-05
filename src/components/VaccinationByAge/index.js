// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {vaccinationByAge} = props

  return (
    <div className="vaccination-age-container">
      <h1 className="vaccination-age-heading">Vaccination by age</h1>
      <div className="text-container">
        <ResponsiveContainer width={700} height={300}>
          <PieChart>
            <Pie
              cx="70%"
              cy="50%"
              data={vaccinationByAge}
              startAngle={0}
              endAngle={360}
              innerRadius="0%"
              outerRadius="100%"
              dataKey="count"
              margin={{
                right: 105,
              }}
            >
              <Cell name="18-44" fill="#2d87bb" />
              <Cell name="44-61" fill="#64c2a6" />
              <Cell name="Above 61" fill="#a3df9f" />
            </Pie>
            <Legend
              iconType="circle"
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default VaccinationByAge
