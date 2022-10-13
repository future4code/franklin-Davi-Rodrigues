import styled from 'styled-components'

export const Top = styled.div`
    background-color: #5C16C5;
    width: 100vw;
    height: 56px;
    display: flex;
    align-items: center;
    padding-left: 112px;
    gap: 5px;
`

export const Title = styled.h1`
    margin: 0;
    color: white;
    font-weight: 700;
    font-size: 24px;
    text-transform: uppercase;
`

export const Firulinha = styled.div`
    height: 15px;
    width: 45px;
    border-radius: 15px;
    background-color: white;
`

export const Bottom = styled.div`
    background-color: #2D0C5E;
    width: 100vw;
    height: 449px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const Call = styled.h2`
    color: white;
    font-weight: 700;
    font-size: 48px;
    max-width: 781px;
    text-align: center;
`

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
`

export const TextFilterBy = styled.p`
    margin: 0;
    color: white;
    font-size: 14px;
    font-weight: 700;
`

export const FiltersContainer = styled.div`
    max-width: 800px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
`

export const Filter = styled.div`
    background-color: white;
    height: 40px;
    padding: 8px 16px;
    font-weight: 700;
    font-size: 16px;
    border-radius: 4px;

    &:hover {
        color: white;
        background-color: #5C16C5;
    }
`