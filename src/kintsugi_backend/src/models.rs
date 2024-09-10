use serde::{Deserialize, Serialize};
use candid::CandidType;
use candid::Nat;

#[derive(Serialize, Deserialize, Clone, CandidType)]
pub struct Report {
    pub id: Nat,
    pub incident_type: String,
    pub description: String,
    pub date: String,
    pub location: String,
    pub priority: String,           // Add priority field here
    pub status: Option<String>,
    pub comments: Vec<String>,       
    pub evidence: Option<Vec<String>>,
    pub flagged: bool,              
    pub escalated_to_dao: bool,     
}

