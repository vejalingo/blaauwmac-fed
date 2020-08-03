import React, { Component } from 'react'
import { Tabs, Radio, Button } from 'antd'
import { Link } from 'react-router-dom'

const { TabPane } = Tabs

const cData = [
  {
    title: 'BUILDING COMBINED',
    desc:
      'All property including private houses, residential units, hostels and flats,  outbuildings thereto (constructed of brick, stone, concrete, or metal on metal framework and roofed with slate, tiles, metal, concrete or asbestos unless otherwise stated in the Specification), satellite dishes, tanks, water pumping equipment, courts, pools (except pools built above ground level and vinyl lined pools), fixed filtration plant, driveways, paving, fixtures and fittings, underground water, gas and sewerage pipes, drains, watercourses, electricity and telephone cables or public supply connections and sporting and recreational structures, landlord’s fixtures and fittings therein and thereon, walls, gates, posts, fences (except as excluded below), tarred or paved roads, driveways, paths or parking areas, boreholes (including pumps and motors) owned by or leased by the Insured, property held by the Insured in trust and / or commission and/or in the custody and / or under their control and / or for which they are responsible other than as specifically excluded below.'
  },
  {
    title: 'BUSINESS INTERRUPTION SECTION',
    desc: `Loss following interruption of or interference with the business (hereinafter termed INTERRUPTION)  in consequence of DAMAGE occurring during the period of insurance at the premises, or elsewhere as mentioned in the extension to other premises clause contained in this section, in respect of which payment, reinstatement or repair has been made or liability therefore admitted under (a) the Combined, Office Contents or any other material damage insurance covering the interest of the Insured but only in respect of perils insured under the Combined section of this policy (b) the Theft section of this policy if stated to be included in the Specification  
provided that the cover under this section of the policy excludes any loss following interruption arising from the theft of electric cables.
`
  },
  {
    title: 'OFFICE CONTENTS SECTION',
    desc: `1.    DAMAGE to the contents (other than documents as defined in Sub-Section C if Insured thereunder                and electronic data processing equipment) including landlord's fixtures and fittings, the property of the               Insured or for which they are responsible and, to the extent that the same is not otherwise insured.  
2.  DAMAGE to the whole or part of the property described and defined in Sub-Section C and the consequences thereof Insured and described in Sub-Section D.  
3.  Loss and/or expenditure described in Sub-Sections B and E
`
  },
  {
    title: 'ACCOUNTS RECEIVABLE SECTION',
    desc: `Loss resulting from DAMAGE by accident or misfortune to the insured's books of account, or other business books or records, at the premises or at the residence of any director, partner or employee, or at the premises of any accountant of the insured, including transit incidental thereto, in consequence whereof the insured are unable to trace or establish the outstanding debit balances in whole or part due to them  
provided that the liability of the Insurers shall not exceed the sum insured stated in the Specification, and that the basis of indemnity will be as set out in the indemnity clause which forms part of this section.  
If, because of imminent danger of DAMAGE thereto, such books of account or other business books or records are removed to a place of safety, the insurance hereunder shall apply if such goods are DAMAGED as aforesaid during such removal or while so located or being returned to the premises, provided the Insured shall notify the Insurers in writing of such removal within 30 days thereafter.  
The Insurers will also pay all reasonable collection costs and expenses incurred by the Insured in excess of normal collection costs and expenses made necessary because of such DAMAGE
`
  },
  {
    title: 'BUSINESS ALL RISKS SECTION',
    desc: `DAMAGE to the whole or part of the property described in the Specification, the property of the Insured or for which they are responsible, while anywhere in the world by any accident or misfortune not otherwise excluded,   
provided that the Insured shall be responsible for the first amount payable stated in the Specification in respect of each and every event.
`
  },
  {
    title: 'THEFT SECTION',
    desc: `DAMAGE to contents, the property of the insured or for which they are responsible, of any building at the insured premises described in the Specification, as a result of theft accompanied by forcible and violent entry into or exit from such building or any portion thereof or any attempt thereat or as a result of theft (or any attempt thereat) following violence or threat of violence against persons lawfully on the premises.   `
  },
  {
    title: 'GLASS SECTION',
    desc: `DAMAGE to internal and external glass (including mirrors), signwriting and treatment thereon at the insured premises as stated in the Specification, the property of the Insured or for which they are responsible.  `
  },
  {
    title: 'MONEY SECTION',
    desc: `DAMAGE to money (as defined) the property of the Insured or for which they are responsible, occurring within the territorial limits and/or as otherwise specified  
provided that the liability of the Insurers for all DAMAGE arising from all occurrences of a series consequent upon or attributable to one source or original cause shall not exceed the amount/s stated in the Specification.   
`
  },
  {
    title: 'FIDELITY SECTION',
    desc: `1. Loss of money and/or other property, belonging to the Insured or for which they are responsible, stolen by an Insured employee during the currency of this section  
2.  Direct financial loss sustained by the Insured as a result of fraud or dishonesty of an Insured employee, all of which occurs during the currency of this section, which results in dishonest personal financial gain for the employee concerned
`
  },
  {
    title: 'MOTOR SECTION',
    desc: `DAMAGE to any vehicle described in the Specification.    
If such vehicle is disabled by reason of any DAMAGE insured hereby, the Insurers will pay the reasonable cost of protection and removal to the nearest repairers.  The Insured may give instructions for repairs to be executed without the previous consent of the Insurers to the extent of but not exceeding the sum of R5 000 provided that a detailed estimate is first obtained and immediately forwarded to the Insurers.  The Insurers will also pay the reasonable cost of delivery to the Insured after repair of such DAMAGE not exceeding the reasonable cost of transport to the permanent address of the Insured in the Republic of South Africa, Namibia, Botswana, Lesotho, Swaziland, Zimbabwe, and Malawi.
`
  },
  {
    title: 'ACCIDENTAL DAMAGE SECTION',
    desc: `Accidental physical loss of or damage to the whole or part of the property described in the Specification while anywhere in the world by any accident or misfortune not herein excluded or otherwise insured or for which insurance is available and described (whether incorporated in this policy or not) in terms of any section (other than Business All Risks) listed in the index of this Policy in connection with any one source or original cause.`
  },
  {
    title: 'GOODS IN TRANSIT SECTION',
    desc: `DAMAGE to the whole or part of the property described in the Specification, owned by the Insured or for which they are responsible, in the course of transit by air, rail or road or other means incidental thereto and caused by any accident or misfortune not otherwise excluded`
  },
  {
    title: 'PERSONAL ACCIDENT SECTION',
    desc: `Bodily injury caused by accidental, violent, external and visible means to any Insured Person or employee of the Insured (hereinafter referred to in this section as Insured person) specified in the Specification. The Insurers will pay to the Insured, on behalf of the Insured person or his estate, the compensation stated in the Specification in the event of accidental bodily injury to any Insured person directly and independently of all other causes resulting within 24 calendar months in death or disability or in medical expenses being incurred as specified in the Specification under the heading circumstances.`
  },
  {
    title: 'STATED BENEFITS SECTION',
    desc: `Bodily injury caused by accidental, violent, external and visible means to any principal, partner, director or employee of the Insured (hereinafter referred to in this section as Insured person) specified in the Specification. The Insurers will pay to the Insured, on behalf of the Insured person or his estate, the compensation stated in the Specification in the event of accidental bodily injury to any Insured person directly and independently of all other causes resulting within 24 calendar months in death or disability or in medical expenses being incurred as specified in the Specification under the heading circumstances.`
  },
  {
    title: 'MACHINERY BREAKDOWN SECTION',
    desc: `Sudden and unforeseen physical damage to the machinery described in the Specification from any cause not hereinafter excluded whilst   
1. working or at rest 
2. being dismantled for the purpose of cleaning, inspection and overhaul or removal to another position or in the course of these operations themselves or subsequent re-erection within the Insured's premises 
3. at any premises for the purpose of cleaning, overhaul, repair or other similar purpose anywhere within the territorial limits including whilst in transit
`
  },
  {
    title: 'MACHINERY INTERRUPTION SECTION',
    desc: `Damage to machinery specified in the Specification and used by the Insured at the premises for the purpose of the business resulting in interruption or interference with the business, provided that payment shall have been made or liability admitted for the damage under the machinery breakdown section except in so far as a proviso may operate to exclude losses below a specified amount`
  }
]

class SectionsOfCover extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'top'
    }
  }

  handleModeChange = e => {
    const mode = e.target.value
    this.setState({ mode })
  }

  render() {
    const { mode } = this.state
    const {
      match: {
        params: { orgId }
      }
    } = this.props
    return (
      <div>
        <Tabs defaultActiveKey="0" tabPosition="left" style={{ height: 300 }}>
          {cData?.map(({ title, desc }, i) => (
            <TabPane tab={`${title}`} key={i}>
              <p>{desc}</p>
              <Link
                type="primary"
                to={`/underwriting/${orgId}/overview/${title.replace(/\s+/g, '-').toLowerCase()}`}
              >
                Open
              </Link>
            </TabPane>
          ))}
        </Tabs>
      </div>
    )
  }
}

export default SectionsOfCover
