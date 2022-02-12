import {
  Select,
  MenuItem,
  SelectChangeEvent,
  TableRow,
  TableCell,
  Input,
} from "@mui/material";
import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";

type Prop = {
  OriginsAndDestinys: Array<{
    id_origin_destiny: number;
    origin: { description: string };
    destiny: { description: string };
    value: number;
  }>;
};

function SelectInput({ OriginsAndDestinys }: Prop) {
  const [DDDs, setDDDs] = useState([]);
  const [valueState, setValueState] = useState<{ [x: string]: string }>({
    origin: "011",
    destiny: "016",
    time: "0",
    plan: "30",
  });
  const [loading, setLoading] = useState(true);

  const getDDDs = async () => {
    try {
      const response = await axios.get("http://localhost:3001/DDDs");
      const { data } = response;
      setDDDs(data);
      setLoading(false);
      return true;
    } catch (error) {
      return error;
    }
  };

  const CalPlans = (value: number, bool: boolean) => {
    const { time, plan } = valueState;
    if (bool) {
      const cal = value * (Number(time) - Number(plan));
      const tenpor = cal / 10;
      return cal < 0 ? 0 : cal + tenpor;
    }
    return value * Number(time);
  };

  const RenderPlans = (bool: boolean) => {
    const curr = OriginsAndDestinys.find(
      ({ origin, destiny }) =>
        origin.description === valueState.origin &&
        destiny.description === valueState.destiny
    );
    return curr ? CalPlans(curr.value, bool).toFixed(2) : "-";
  };

  useEffect(() => {
    getDDDs();
  }, []);

  const handleChange = (
    event:
      | SelectChangeEvent<string>
      | ChangeEvent<{ value: string; name: string }>
  ) => {
    const { value, name } = event.target;
    setValueState((prevState) => ({ ...prevState, [name]: value }));
  };

  const { origin, destiny, time, plan } = valueState;

  return (
    <TableRow>
      <TableCell>
        <Select
          labelId="label"
          id="select"
          name="origin"
          value={`${origin}`}
          onChange={handleChange}
        >
          {!loading &&
            DDDs.filter(({ description }) => description !== destiny).map(
              ({ description }) => (
                <MenuItem value={description}>{description}</MenuItem>
              )
            )}
        </Select>
      </TableCell>
      <TableCell>
        <Select
          labelId="label"
          name="destiny"
          id="select"
          value={`${destiny}`}
          onChange={handleChange}
        >
          {!loading &&
            DDDs.filter(({ description }) => description !== origin).map(
              ({ description }) => (
                <MenuItem value={description}>{description}</MenuItem>
              )
            )}
        </Select>
      </TableCell>
      <TableCell>
        <Input
          type="number"
          name="time"
          value={`${time}`}
          onChange={handleChange}
        />
      </TableCell>
      <TableCell>
        <Select
          labelId="label"
          name="plan"
          id="select"
          value={plan}
          onChange={handleChange}
        >
          <MenuItem value="30">FaleMais 30</MenuItem>
          <MenuItem value="60">FaleMais 60</MenuItem>
          <MenuItem value="120">FaleMais 120</MenuItem>
        </Select>
      </TableCell>
      <TableCell>
        <div>{`R$ ${RenderPlans(true)}`}</div>
      </TableCell>
      <TableCell>
        <div>{`R$ ${RenderPlans(false)}`}</div>
      </TableCell>
    </TableRow>
  );
}

export default SelectInput;
