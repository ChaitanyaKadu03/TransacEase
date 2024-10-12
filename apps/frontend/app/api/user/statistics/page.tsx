import { Suspense } from 'react'
import { Statistics } from '../../../../components/sections/statistics'
import { Loading } from '../../../../components/sections/loading'

const page = () => {
  return (<div>
    <Suspense fallback={<Loading />}>
      <Statistics />
    </Suspense>
  </div>
  )
}

export default page